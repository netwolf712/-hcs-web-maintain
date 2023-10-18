import { getRouters } from "@/api/menu";
import { getMaintainRouters } from "@maintainModule/api/menu";

// 生成路由
export function generateModuleRoutes() {
  const baseRouter = getRouters();
  //将子模块的数据也插入其中
  const miantainRouter = getMaintainRouters();
  miantainRouter.sidebarRoutes.forEach((element) => {
    baseRouter.sidebarRoutes.push(element);
  });

  miantainRouter.rewriteRoutes.forEach((element) => {
    baseRouter.rewriteRoutes.push(element);
  });

  return baseRouter;
}
