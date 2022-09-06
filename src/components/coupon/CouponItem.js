import React, { Component } from 'react';


class CouponItem extends Component {
    render() {
        return (
            <div className='CouponItem'>
                <div className='coupon-logo'></div>
                <div className='coupon-info'>
                    <div className='coupon-title'>
                        <div className='coupon-brand'>브랜드명</div>
                        <div className='coupon-item'>상품명</div>
                    </div>
                    <div className='coupon-deadline'>기한</div>
                </div>
            </div>
        );
    }
}

export default CouponItem;