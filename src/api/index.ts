import { toast } from 'react-toastify';
import { ApiProps } from '../types';

export const fetchApi = async (props: ApiProps) => {
  const { url, contentType = 'application/json' } = props;

  try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': contentType,
                Accept: contentType,
            },
        });
        let data = null;
        if (response.status >= 400) {
            throw new Error(`${url} - ${response.status} ${response.statusText}`,);
        }
        else {
            data = await response.json();
        }
        return {
            data, 
            status: response.status,
            message: response.statusText
        };
    } catch (error) {
        toast.error(`${error}`);
    }
};
