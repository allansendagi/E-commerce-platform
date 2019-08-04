import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
	constructor() {
		super()

		this.state = {
			sections:[{
				    title: 'Dotted Scarfs',
				    imageUrl:'https://previews.dropbox.com/p/thumb/AAjkJMiNfUztCZYFoVrZMen2n4xLhve0_tUyR_THoy2AMm8WR2d58atYBQ4mA0BVfyKml2QstiE9JDKcv49NPz-f6L4fWWMi2BwreainTvwIzbH8aSrihrmjZ85pdf1MxXF7aTjsLvIN35-ebycXCqpASv187fNETGuLcE7iK_K7MqtCGhIijQVzNd7Cxd9sJjvowxbLVPnUGeuHPB_1sv4AzVqRdLcIgTfe2uge53G3BiHBQEYdMuGYXHai89hNitSsmtlP1yLX0OpP-9JEoMhFgiqpflLLBnvLCpqIMAYmO3QyfSRu5jJ02SSRnEw4P9OgybshAUJFW8msgvnOjksi/p.jpeg?fv_content=true&size_mode=5',
				    id: 1,
				    linkUrl: 'shop/hats'
				  },
				  {
				    title: 'Mixed Scarfs',
				    imageUrl: 'https://previews.dropbox.com/p/thumb/AAjd81tIEBg7ZrdvdOA5h2YNyCgk6M5s8Uw8bS5xhhHilmnd4zAybJ7h6Q1L7nE70HqIepKDHy4FzF1FdSJGJh6VksokvuIHwbvuiRjIQcQmBAObOxAI8rK_AXmK-630hH68Zyqr8GWb5F-Pq6l0eg3tOxikeFsrhdOblrqHk1zeLh7ZfW-xiKgn_ZEndYT-wpRJcJ1z12gMSuF3qbyrkayKrnwT0iGbDh7cxq5TmUX4S0fCLb6CL1DjBbL61eetlZwfArvH_PjXaVEPvA1XTJ2QNDE6rjm134WjqZwuX1AvIhdYMRu0_4C5JI0duMLyhANZJz8jFmTLBt4dMp5zMZs1yaQI1TajxshUlrTp_WuL4w/p.jpeg?size=1024x768&size_mode=3',
				    id: 2,
				    linkUrl: 'shop/jackets'
				  },
				  {
				    title: 'Purple Scarfs',
				    imageUrl: 'https://previews.dropbox.com/p/thumb/AAiyLWef6RdX38hAZyY2wpXigie9HHPnfuht2SNXruBwqzJ21O2xNIKz5HdlvlgbR3eJFqBzDWpwk2I4T74TuckL54sY0QkzJ242EkfMIknhMFjebtDhmKdIJ7u5dB36lLJkpr-LeC5FLStmRBhl6C3GnTHNy4kggTzkexvSwdIu9GfJn4LYIwz5J5PaINZ2TM-wsWSvoVLDS32Apj7-ns_vCtCt9rLUdZ1qHkKjajpkUc_D8CQR2CZtjmHDDqlgfbdxN3uVHQ2C8VKbFC38CSEmr6nJ3kI4GlHoETIBWjWQZPBZvzEMfpYwVm-B9aqao1QX-LpVxmy75c8-KqrApjnJUnDi5jSMz44LE872_igocw/p.jpeg?fv_content=true&size_mode=5',
				    linkUrl: 'shop/sneakers'
				  },
				  {
				    title: 'Blue Scarfs',
				    imageUrl: 'https://previews.dropbox.com/p/thumb/AAjwUZmtEPR26IL-E5_X8Fy3ggd4z08KS7FBoA03c1rGM7YeNQtJcH-XKawxbUFyeYS1ny3hxZwditX1ktd3NJQv53iPQ9Q7LNT4a6vPQRNPxRm0q1CYy5mGi2Ja8eB5f0G1ynW7Xx9Fkq83KV2CQboGT-zdTFFVvNFOZ_oSogmxA47ysl_cs9Nl9rG5FTf8PAJ8T-z_mWQgKSgdhSfFATMgdoH_WcKBHmSYmNM1LP-Dill-Vg0RyT2dRxBeBmhqKyf_bGP20o730cDr_IOvAyajG6M7fweuy3chPrQF3_puuNedaCgOj56OnRifVZPtuzFIHxOvmwj0SU5eOflG8Z0ID-_INQO54T2s60s7CekGYejAbilipQ6CFuPvIIrN1TyNiiM_2OYQxQ4Ztq9lyrgkUzQBRvqhCNoEJCksrsa_e2M95rHlQd4UrKtZyGoMKg86wC5n8Gtmkq-Vkn2ZFoJqvseXfzK05b3iuhcgcnHS6Q/p.jpeg?fv_content=true&size_mode=5',
				    size: 'large',
				    id: 4,
				    linkUrl: 'shop/womens',
				  },
				  {
				    title: 'Red Scarfs',
				    imageUrl: 'https://previews.dropbox.com/p/thumb/AAjBvpN1ayxk68PlzVwwLgxyu970StymDvvlq7z7QIhpRWYQa9vCMgQFqpuySME_-aiUtrN-KDEKwm5VEKcTP-e-VliSGqjrci-PPcGDrre3iAbB3kk0S-K-UUHHIuJFoM4PBrQmP6Ty7Tu2BzXxQM-gNa11UaGEfLNKm9VbpN4v1VzjVGqdd3M-LEeddr2NilcHYpPMC1hJyC3yEp7ylaVVjE-pMkZkO4ZiY1j7J-0C9WVzbcPS6yW5kXPTqymgX76dv-F7QBL7MhhiAYgFyewcuA0xIA0H919e4UoxyeoC-70EtDg3QtuExpJmQ-D8D3sLvTflDb5C0LOknvU7UZE5kToGTa9_BJb0mb0uqnLwgA/p.jpeg?fv_content=true&size_mode=5',
				    size: 'large',
				    id: 5,
				    linkUrl: 'shop/mens'
	 			  }]			
              }
	        }

	        render() {
	        	return (
	        	  <div className='directory-menu'>
	        	  	{
	        	  	this.state.sections.map(({title, imageUrl, id, size }) => (
	        	  		<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
	        	  		))
	        	  }
	        	  </div>
	        	)
	        }
          }

          export default Directory;




