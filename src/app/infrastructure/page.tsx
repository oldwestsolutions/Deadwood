import { permanentRedirect } from 'next/navigation';

/** Legacy URL — full offering lives at `/architecture`. */
export default function InfrastructurePage() {
  permanentRedirect('/architecture');
}
