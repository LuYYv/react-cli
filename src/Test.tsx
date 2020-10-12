import * as React from 'react';
import { Form, FormItem } from '@formily/antd';
import { Input } from '@formily/antd-components';
import styles from './styles.module.less';

export const Test:React.FC = () => {
    return (
        <div className={styles.test_container}>
            <Form>
                <FormItem label="String" name="string" component={Input} />
            </Form>
        </div>
    )
}