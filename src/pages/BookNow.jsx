import '../App.css';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageFooter from '../components/PageFooter';

function BookNow() {
  return (
    <>
      <Navigation></Navigation>
      <title>Floral Pop Co.</title>
      <iframe src="https://www.honeybook.com/widget/floral_pop_co_203712/cf_id/61783908e47c1c07fd82b023" title="Book with us now"></iframe>
      <PageFooter />
    </>
  );
}

export default BookNow;