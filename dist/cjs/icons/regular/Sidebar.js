var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Sidebar_exports = {};
__export(Sidebar_exports, {
  default: () => Sidebar_default
});
module.exports = __toCommonJS(Sidebar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SidebarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.654 483.348 32 448 32ZM136 336H88C74.746 336 64 325.254 64 312C64 298.744 74.746 288 88 288H136C149.254 288 160 298.744 160 312C160 325.254 149.254 336 136 336ZM136 240H88C74.746 240 64 229.254 64 216C64 202.744 74.746 192 88 192H136C149.254 192 160 202.744 160 216C160 229.254 149.254 240 136 240ZM136 144H88C74.746 144 64 133.254 64 120C64 106.744 74.746 96 88 96H136C149.254 96 160 106.744 160 120C160 133.254 149.254 144 136 144ZM464 416C464 424.822 456.824 432 448 432H224V80H448C456.824 80 464 87.178 464 96V416Z" })
  }
));
SidebarRegular.displayName = "SidebarRegular";
var Sidebar_default = SidebarRegular;
