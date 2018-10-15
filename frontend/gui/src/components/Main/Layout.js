import React from 'react';
import { Link } from 'react-router-dom'; 
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainLayout extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home"> Home </Menu.Item>
                    <Menu.Item key="report"> Reports </Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to='/'> Home </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {this.props.children}
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    LabCodes Challenge
                </Footer>
            </Layout>
        )
    }

}