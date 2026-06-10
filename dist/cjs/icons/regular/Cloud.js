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
var Cloud_exports = {};
__export(Cloud_exports, {
  default: () => Cloud_default
});
module.exports = __toCommonJS(Cloud_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.348 214.469C543.475 212.285 544 210.217 544 208C544 146.145 493.855 96 432 96C420.594 96 409.807 98.207 399.438 101.377C368.885 59.506 319.801 32 264 32C170.801 32 95.412 107.928 96.08 200.793C40.236 220.607 0 273.363 0 336C0 415.529 64.471 480 144 480H504C579.111 480 640 419.109 640 344C640 282.668 599.135 231.428 543.348 214.469ZM504 432H144C91.064 432 48 388.934 48 336C48 295.797 73.771 259.641 112.131 246.029L144.32 234.607C144.047 195.984 144.096 201.461 144.027 197.436C145.395 132.445 198.688 80 264 80C302.396 80 337.629 98.104 360.662 129.67L380.799 157.268L413.471 147.279C462.334 132.338 497.697 172.838 495.428 211.68L493.234 249.402L529.387 260.393C566.838 271.777 592 305.377 592 344C592 392.523 552.523 432 504 432Z" })
  }
));
CloudRegular.displayName = "CloudRegular";
var Cloud_default = CloudRegular;
