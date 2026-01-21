import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { companyInfo } from '../../data/agents';

export function Header() {
  return (
    <header className="bg-neutral-800 border-b border-neutral-700 sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://global.acceleragent.com/usr/13705421761/1354126086.png"
              alt={companyInfo.name}
              className="h-10 w-auto"
            />
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavItem to="/">About</NavItem>
            <NavItem to="/listings">Listings</NavItem>
            <NavItem to="/resources">Resources</NavItem>
          </nav>

          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
          isActive
            ? 'bg-primary-900/50 text-primary-300'
            : 'text-neutral-300 hover:text-white hover:bg-neutral-700'
        )
      }
    >
      {children}
    </NavLink>
  );
}
