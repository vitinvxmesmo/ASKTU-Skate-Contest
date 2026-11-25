import { redirect } from 'next/navigation';
import { registrationUrl } from '../config/event';

export default function RegistrationRedirect(){
  redirect(registrationUrl);
}
