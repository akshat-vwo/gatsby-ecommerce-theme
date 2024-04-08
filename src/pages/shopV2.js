import React, { useState } from 'react';
import * as styles from './shopV2.module.css';

import Accordion from '../components/Accordion';
import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import Checkbox from '../components/Checkbox';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import Button from '../components/Button';

import Config from '../config.json';
import { generateMockProductData } from '../helpers/mock';
import { Link } from 'gatsby';

const ShopV2Page = (props) => {
  const data = generateMockProductData(9, 'woman');
  const filters = Config.filters;

  const [filterState, setFilterState] = useState(filters);

  const filterTick = (e, categoryIndex, labelIndex) => {
    const filterStateCopy = [...filterState];
    filterStateCopy[categoryIndex].items[labelIndex].value = !e.target.value;
    setFilterState(filterStateCopy);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[{ link: '/', label: 'Home' }, { label: 'Woman' }]}
          />
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Woman`}
          subtitle={
            'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <div className={styles.filterContainer}>
              {filterState.map((category, categoryIndex) => {
                return (
                  <div key={categoryIndex}>
                    <Accordion customStyle={styles} title={category.category}>
                      {category.items.map((item, itemIndex) => {
                        return (
                          <div key={itemIndex} className={styles.filters}>
                            <Checkbox
                              size={'sm'}
                              action={(e) =>
                                filterTick(e, categoryIndex, itemIndex)
                              }
                              label={item.name}
                              value={item.value}
                              id={item.name}
                              name={item.name}
                            />
                          </div>
                        );
                      })}
                    </Accordion>
                  </div>
                );
              })}
            </div>
            <div>
              <div className={styles.metaContainer}>
                <span className={`standardSpan`}>476 items</span>
              </div>
              <ProductCardGrid height={'440px'} data={data}></ProductCardGrid>
            </div>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div>
        </Container>
      </div>
      <LayoutOption />
    </Layout>
  );
};

export default ShopV2Page;

export const Head = () => (
  <>
    <Link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
    <script
      type="text/javascript"
      id="vwoCode"
      dangerouslySetInnerHTML={{ __html: `
      window._vwo_code || (function() {
      var account_id=800698,
      version=2.1,
      settings_tolerance=500,
      hide_element='body',
      hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
      f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var i=this.getSettings(),n=d.createElement('script'),r=this;t=t||{};if(i){n.textContent=i;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var i=this.hide_element(),n=i?i+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=n;else t.appendChild(d.createTextNode(n));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var n=d.createElement('div');n.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';n.setAttribute('id','_vis_opt_path_hides');n.classList.add('_vis_hide_layer');t.parentNode.insertBefore(n,t.nextSibling)}var o='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:o})}else{this.load(o+'&x=true')}}};w._vwo_code=code;code.init();})();
`}}
    />
    
  </>
);
