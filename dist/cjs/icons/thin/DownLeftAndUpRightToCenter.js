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
var DownLeftAndUpRightToCenter_exports = {};
__export(DownLeftAndUpRightToCenter_exports, {
  default: () => DownLeftAndUpRightToCenter_default
});
module.exports = __toCommonJS(DownLeftAndUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftAndUpRightToCenterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M291.99 239.99H405.27C427.855 239.99 441.52 211.911 424.115 194.521L376.428 146.872L485.656 37.646C488.781 34.521 488.781 29.458 485.656 26.333S477.469 23.208 474.344 26.333L365.109 135.568L317.5 87.99C299.609 70.122 272 84.724 272 106.826V220.013C272 231.044 280.949 239.99 291.99 239.99ZM287.992 106.826C287.992 97.818 299.197 92.302 306.191 99.294L412.807 205.826C420.002 213.005 414.059 224.005 405.27 224.005H291.99C289.787 224.005 287.992 222.216 287.992 220.013V106.826ZM220.01 271.99H106.73C84.145 271.99 70.48 300.068 87.885 317.458L135.57 365.107L26.344 474.333C23.219 477.458 23.219 482.521 26.344 485.646C27.906 487.208 29.937 487.99 32 487.99S36.094 487.208 37.656 485.646L112 411.302L146.889 376.415L194.5 423.99C212.391 441.857 240 427.255 240 405.158V291.966C240 280.935 231.051 271.99 220.01 271.99ZM224.008 405.158C224.008 414.158 212.803 419.677 205.809 412.685L99.193 306.158C91.998 298.974 97.941 287.974 106.73 287.974H220.01C222.213 287.974 224.008 289.763 224.008 291.966V405.158Z" })
  }
));
DownLeftAndUpRightToCenterThin.displayName = "DownLeftAndUpRightToCenterThin";
var DownLeftAndUpRightToCenter_default = DownLeftAndUpRightToCenterThin;
