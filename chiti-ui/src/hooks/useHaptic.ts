import { useCallback, useRef } from 'react';

/**
 * useHaptic Hook - Encapsulates WebAudio & Navigator Haptics securely.
 * Automatically respects `prefers-reduced-motion` logic.
 */
export const useHaptic = () => {
    const audioCtxRef = useRef<AudioContext | null>(null);

    const playPremiumTick = useCallback(() => {
        // Fallback checks
        if (typeof window === 'undefined') return;

        // Respect UX OS reductions
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        try {
            if (!audioCtxRef.current) {
                const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                if (!AudioContextClass) return;
                audioCtxRef.current = new AudioContextClass();
            }

            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.05);

            gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.05);

            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        } catch (error) {
            console.error('AudioContext fail inside haptic execution.');
        }
    }, []);

    return { playPremiumTick };
};
