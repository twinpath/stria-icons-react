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
const SidebarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 256H80C71.164 256 64 263.162 64 272C64 280.836 71.164 288 80 288H144C152.836 288 160 280.836 160 272C160 263.162 152.836 256 144 256ZM144 192H80C71.164 192 64 199.162 64 208C64 216.836 71.164 224 80 224H144C152.836 224 160 216.836 160 208C160 199.162 152.836 192 144 192ZM80 160H144C152.836 160 160 152.836 160 144C160 135.162 152.836 128 144 128H80C71.164 128 64 135.162 64 144C64 152.836 71.164 160 80 160ZM448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM192 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H192V448ZM480 416C480 433.645 465.645 448 448 448H224V64H448C465.645 64 480 78.355 480 96V416Z" })
  }
));
SidebarLight.displayName = "SidebarLight";
var Sidebar_default = SidebarLight;
