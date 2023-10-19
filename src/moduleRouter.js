import { getRouters, getTemplateSettings} from "@/api/menu";
import { getMaintainRouters } from "@maintainModule/api/menu";

// 生成路由
export function generateModuleRoutes() {
  const baseRouter = getRouters();
  //将首页模板插入其中
  addMenu(getTemplateSettings(), baseRouter);  
  //将维护子模块的菜单插入其中
  addMenu(getMaintainRouters(), baseRouter);
  return baseRouter;
}

function addMenu(srcRouter, dstRouter) {
  srcRouter.sidebarRoutes.forEach((element) => {
    dstRouter.sidebarRoutes.push(element);
  });

  srcRouter.rewriteRoutes.forEach((element) => {
    dstRouter.rewriteRoutes.push(element);
  });
}