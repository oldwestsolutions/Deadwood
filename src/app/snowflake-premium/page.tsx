import { redirect } from 'next/navigation';

/** Legacy URL — product renamed to The Blueprint */
export default function SnowflakePremiumRedirect() {
  redirect('/the-blueprint');
}
