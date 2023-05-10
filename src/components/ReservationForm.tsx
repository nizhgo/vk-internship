import React from 'react';
import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const ReservationForm: React.FC = () => {
    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        console.log(JSON.stringify(values));
    };

    const onReset = () => {
        form.resetFields();
    };

    const floors = Array.from({ length: 27 - 3 + 1 }, (_, i) => i + 3);
    const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <Form onFinish={onSubmit} form={form} layout="vertical">
            <Form.Item name="tower" label="Башня" rules={[{ required: true, message: 'Выберите башню' }]}>
                <Select placeholder="Выберите башню">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                </Select>
            </Form.Item>
            <Form.Item name="floor" label="Этаж" rules={[{ required: true, message: 'Выберите этаж' }]}>
                <Select placeholder="Выберите этаж">
                    {floors.map(floor => (
                        <Option key={floor} value={floor}>{floor}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name="room" label="Переговорка" rules={[{ required: true, message: 'Выберите переговорку' }]}>
                <Select placeholder="Выберите переговорку">
                    {rooms.map(room => (
                        <Option key={room} value={room}>{`Переговорка ${room}`}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item name="date" label="Дата" rules={[{ required: true, message: 'Нужно выбрать дату' }]}>
                <DatePicker />
            </Form.Item>
            <Form.Item name="time" label="Интервал времени" rules={[{ required: true, message: 'Выберите время' }]}>
                <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
            <Form.Item name="comment" label="Комментарий">
                <TextArea placeholder="Введите комментарий к бронированию" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
                <Button style={{ marginLeft: '10px' }} onClick={onReset}>
                    Очистить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ReservationForm;