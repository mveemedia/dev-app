import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Area Clienti',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Area Immobili',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Gestione Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Impostazioni',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  //{
  //  title: 'Login',
  //  path: '/auth/login',
  //  icon: (
  //    <SvgIcon fontSize="small">
  //      <LockClosedIcon />
  //    </SvgIcon>
  //  )
  //},
  //{
  //  title: 'Registrazione',
  //  path: '/auth/register',
  //  icon: (
  //    <SvgIcon fontSize="small">
  //      <UserPlusIcon />
  //    </SvgIcon>
  //  )
  //},
  //{
  //  title: 'Errore',
  //  path: '/404',
  //  icon: (
  //    <SvgIcon fontSize="small">
  //      <XCircleIcon />
  //    </SvgIcon>
  //  )
  //}
];
