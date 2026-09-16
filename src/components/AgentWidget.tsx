import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Bot, Loader2, MessageCircle, RotateCcw, Send, X } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  intro?: boolean;
};

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-497309b8/agent/chat`;
const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  intro: true,
  content:
    'Bonjour ! Je suis l’assistant des Gîtes du Soulor. Je peux vous renseigner sur les gîtes, les tarifs, les règles et vérifier une disponibilité.',
};
const SUGGESTIONS = ['Vérifier une disponibilité', 'Quels sont les tarifs ?', 'Les animaux sont-ils admis ?', 'Parlez-moi de l’espace bien-être'];

function newMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return { id: crypto.randomUUID(), role, content };
}

export function AgentWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    window.setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage(explicitMessage?: string) {
    const content = (explicitMessage ?? input).trim();
    if (!content || loading) return;

    const history = messages
      .filter((message) => !message.intro)
      .slice(-8)
      .map(({ role, content: previousContent }) => ({ role, content: previousContent }));
    setMessages((current) => [...current, newMessage('user', content)]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
          apikey: publicAnonKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content, history, website: '' }),
      });
      const data = await response.json();
      if (!response.ok || !data.success || typeof data.reply !== 'string') {
        throw new Error(data.error || 'Réponse indisponible');
      }
      setMessages((current) => [...current, newMessage('assistant', data.reply)]);
    } catch (error) {
      const fallback =
        error instanceof Error && error.message
          ? error.message
          : 'L’assistant est momentanément indisponible.';
      setMessages((current) => [
        ...current,
        newMessage('assistant', `${fallback} Vous pouvez nous joindre au 06 45 79 59 39.`),
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function resetConversation() {
    setMessages([WELCOME_MESSAGE]);
    setInput('');
    inputRef.current?.focus();
  }

  return (
    <div className="fixed bottom-4 right-4 z-[110] sm:bottom-6 sm:right-6">
      {open && (
        <section
          className="mb-3 flex h-[min(610px,calc(100dvh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#f6f3ed] shadow-2xl"
          role="dialog"
          aria-label="Assistant des Gîtes du Soulor"
        >
          <header className="flex items-center gap-3 bg-[#2d3d49] px-4 py-3.5 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a77c] text-[#263641]">
              <Bot size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-base font-semibold">Assistant des Gîtes</h2>
              <p className="flex items-center gap-1.5 text-xs text-white/75">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Réponse immédiate
              </p>
            </div>
            <button
              type="button"
              onClick={resetConversation}
              className="rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label="Nouvelle conversation"
              title="Nouvelle conversation"
            >
              <RotateCcw size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label="Fermer l’assistant"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[86%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-[#2d3d49] text-white'
                      : 'rounded-bl-md border border-[#2d3d49]/10 bg-white text-[#263641] shadow-sm'
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border border-[#a9865d]/35 bg-white px-3 py-1.5 text-left text-xs text-[#59462f] transition hover:border-[#a9865d] hover:bg-[#f2e9dc]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-[#2d3d49]/10 bg-white px-3.5 py-2.5 text-sm text-[#52616b] shadow-sm">
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  Je vérifie…
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#2d3d49]/10 bg-white p-3">
            <div className="flex items-end gap-2 rounded-xl border border-[#2d3d49]/20 bg-[#fbfaf8] p-2 focus-within:border-[#a9865d] focus-within:ring-2 focus-within:ring-[#c9a77c]/20">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, 1500))}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={1500}
                disabled={loading}
                placeholder="Posez votre question…"
                aria-label="Votre message"
                className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-1 py-2 text-sm text-[#263641] outline-none placeholder:text-[#65737c] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#b18a5d] text-white transition hover:bg-[#9b754c] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Envoyer le message"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] leading-tight text-[#65737c]">
              L’IA peut se tromper. Ne partagez pas de données personnelles.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex h-14 items-center gap-2 rounded-full bg-[#b18a5d] px-4 text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#9b754c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        aria-expanded={open}
        aria-label={open ? 'Fermer l’assistant' : 'Ouvrir l’assistant'}
      >
        {open ? <X size={23} aria-hidden="true" /> : <MessageCircle size={23} aria-hidden="true" />}
        {!open && <span className="hidden text-sm font-semibold sm:inline">Une question ?</span>}
      </button>
    </div>
  );
}
