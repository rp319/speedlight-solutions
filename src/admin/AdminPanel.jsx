// AdminPanel.jsx

import { Route } from 'react-router-dom';

import AdminLayout from './AdminLayout';
import AdminHome from './AdminHome';
import AdminUsers from './AdminUsers';

function AdminPanel() {
  return (
   <AdminLayout>
      <Route path="/admin" exact component={AdminHome} />
      <Route path="/admin/users" component={AdminUsers} />
    </AdminLayout>
 
    
  );
}

export default AdminPanel;
 