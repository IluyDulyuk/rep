const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeModalOverlay = true) {
        
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();
              

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                window.forEach(item => {
                    item.style.display = 'none';
                })


                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;

            }) 
        })

        close.addEventListener('click', () => {

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

            window.forEach(item => {
                item.style.display = 'none';
            })
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeModalOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;

                window.forEach(item => {
                    item.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                })
            }
        })
        
    };

    
    function ShowModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }, time)
    }

    const calcScroll = () => {
        const el = document.createElement('div');
        el.style.width = '50px';
        el.style.height = '50px';

        document.body.appendChild(el);
        el.style.overflowY = 'scroll';
        el.style.visibility = 'hidden';
        const scrollWidth = el.offsetWidth - el.clientWidth;

        return scrollWidth;
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // ShowModalByTime('.popup', 60000);
};

export default modals;