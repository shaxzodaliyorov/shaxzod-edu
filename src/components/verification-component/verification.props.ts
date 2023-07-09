export interface VerificationProps {
	accountRecovery?: boolean | undefined;
	changeRecovery: (statecomp: 'verification' | 'new-password' | 'send-email') => void | unknown | undefined;
}
