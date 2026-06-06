
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success('Message envoyé avec succès');
      reset();
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium mb-2 block">
          Nom complet
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Votre nom"
          className="bg-input text-white placeholder:text-muted-foreground"
          {...register('name', { required: 'Le nom est requis' })}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          className="bg-input text-white placeholder:text-muted-foreground"
          {...register('email', {
            required: 'L\'email est requis',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalide',
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
          Sujet
        </Label>
        <Input
          id="subject"
          type="text"
          placeholder="Sujet de votre message"
          className="bg-input text-white placeholder:text-muted-foreground"
          {...register('subject', { required: 'Le sujet est requis' })}
        />
        {errors.subject && (
          <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-2 block">
          Message
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Votre message..."
          className="bg-input text-white placeholder:text-muted-foreground resize-none"
          {...register('message', {
            required: 'Le message est requis',
            minLength: {
              value: 10,
              message: 'Le message doit contenir au moins 10 caractères',
            },
          })}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gap-2"
      >
        {isSubmitting ? (
          'Envoi en cours...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
