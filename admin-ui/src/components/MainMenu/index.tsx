import { DesktopOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
const MainMenu: React.FC = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const navigateTo = useNavigate()
    const currentRoute = useLocation();
    console.log(currentRoute)
    const items: MenuItem[] = [
        {
            key: "/page1",
            icon: <PieChartOutlined />,
            label: "工作台",
        },
        {
            key: "/page2",
            icon: <DesktopOutlined />,
            label: "配置管理",
        },
        {
            key: "/user",
            icon: <UserOutlined />,
            label: "用户管理",
            children: [
                {
                    key: "/user/list",
                    label: "用户列表",
                },
                {
                    key: "4",
                    label: "充值列表",
                },
                {
                    key: "5",
                    label: "订单列表",
                }
            ]
        },
    ]
    let firstOpenKey: string = "";
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }
    //获取上级key/路由
    items.forEach((item: any) => {
        if (item.children) {
            const find = item.children.find(findKey)
            if (find) {
                firstOpenKey = item.key
            }
        }
    })

    const [openKeys, setOpenKeys] = useState<string[]>(firstOpenKey ? [firstOpenKey] : []);
    const onMenuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    const onOpenChange = (keys: string[]) => {
        const finalKeys = keys[keys.length - 1] ? [keys[keys.length - 1]] : [];
        setOpenKeys(finalKeys);
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline" items={items}
            onClick={onMenuClick}
            openKeys={openKeys}
            onOpenChange={(keys) => onOpenChange(keys)}
        />
    )
}
export default MainMenu