import { NextApiResponse, NextApiRequest } from 'next';
// import { NextApiRequest  } from '../../node_modules/next/dist/shared/lib/utils';

type Data = {
    name: string;
    
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: 'John Doe' })

    
}