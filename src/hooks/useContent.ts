import { useState, useEffect } from 'react';
import { SiteContent, defaultContent } from '../types/content';
import { projectId, publicAnonKey } from '../utils/supabase/info';

function isObject(value: unknown): value is Record<string, any> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function mergeContent(remoteContent: Partial<SiteContent> | null | undefined): SiteContent {
  const remote = remoteContent ?? {};

  return {
    tarifs: Array.isArray(remote.tarifs) ? remote.tarifs : defaultContent.tarifs,
    gites: Array.isArray(remote.gites) ? remote.gites : defaultContent.gites,
    contact: isObject(remote.contact) ? { ...defaultContent.contact, ...remote.contact } : defaultContent.contact,
    social: isObject(remote.social) ? { ...defaultContent.social, ...remote.social } : defaultContent.social,
    hero: isObject(remote.hero) ? { ...defaultContent.hero, ...remote.hero } : defaultContent.hero,
    infoCards: Array.isArray(remote.infoCards) ? remote.infoCards : defaultContent.infoCards,
    wellness: isObject(remote.wellness) ? { ...defaultContent.wellness, ...remote.wellness } : defaultContent.wellness,
    navigation: Array.isArray(remote.navigation) ? remote.navigation : defaultContent.navigation,
    texts: isObject(remote.texts) ? { ...defaultContent.texts, ...remote.texts } : defaultContent.texts,
    pages: isObject(remote.pages) ? remote.pages : defaultContent.pages,
  };
}

export function useContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-66cb1054/content`,
          {
            headers: {
              Authorization: `Bearer ${publicAnonKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Erreur lors du chargement du contenu');
        }

        const data = await response.json();
        
        if (data.success) {
          // Fusionner avec le contenu par défaut pour les valeurs manquantes
          setContent(mergeContent(data.content));
        }
      } catch (err) {
        console.error('Erreur de chargement du contenu:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        // Utiliser le contenu par défaut en cas d'erreur
        setContent(defaultContent);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  const refreshContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-66cb1054/content`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Erreur lors du chargement du contenu');
      }

      const data = await response.json();
      
      if (data.success) {
        setContent(mergeContent(data.content));
      }
    } catch (err) {
      console.error('Erreur de rafraîchissement du contenu:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  return { content, loading, error, refreshContent };
}
