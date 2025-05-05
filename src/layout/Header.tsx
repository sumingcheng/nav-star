import React from 'react';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-8">用户管理系统</h1>
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex gap-6">
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    首页
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/users" className="hover:text-blue-600 transition-colors">
                    用户管理
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/settings" className="hover:text-blue-600 transition-colors">
                    系统设置
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">管理员</span>
          <button className="text-sm text-gray-600 hover:text-blue-600">
            退出
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
