const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
        currency: "usd",
        uint_amount: item.price * 100, 
        product_data: {
            name: item.title,
            images: [item.image]
        },

    }
}))   //3.51
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            //   price: '9.99',
              quantity: 1,
            },
          ],
        payment_method_types: ["card"],
        shipping_rates: ['shr_1NpRRUSJ2C0CqNrNQ9CWSbYR'],
        shipping_address_collection: {
            allowed_countries: ['US','GB', 'CA']
        },
        mode: "payment",
        success_url : `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata:{
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({id: session.id})
};
