import Footer from '@composed-components/Footer/Footer';
import Header from '@composed-components/Header/Header';
import { TLayout } from '@layouts/types';

const Layout = ({ children }: TLayout) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default Layout;
