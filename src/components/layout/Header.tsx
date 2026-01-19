import { NavLink } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { companyInfo } from '../../data/agents';

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-white">{companyInfo.name}</div>
              <div className="text-xs text-slate-400">Hollister, CA</div>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavItem to="/">About</NavItem>
            <NavItem to="/listings">Listings</NavItem>
            <NavItem to="/resources">Resources</NavItem>
          </nav>

          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
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
            : 'text-slate-300 hover:text-white hover:bg-slate-700'
        )
      }
    >
      {children}
    </NavLink>
  );
}
