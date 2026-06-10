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
var TabletRugged_exports = {};
__export(TabletRugged_exports, {
  default: () => TabletRugged_default
});
module.exports = __toCommonJS(TabletRugged_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletRuggedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.25 164.376C444.625 161.751 448 156.251 448 150.126V73.876C448 67.751 444.625 62.251 439.25 59.626L416 48.001C416 21.501 394.5 0.001 368 0.001H80C53.5 0.001 32 21.501 32 48.001L8.75 59.626C3.375 62.251 0 67.751 0 73.876V150.126C0 156.251 3.375 161.751 8.75 164.376L32 176.001V192.001L8.75 203.626C3.375 206.251 0 211.751 0 217.876V294.126C0 300.251 3.375 305.751 8.75 308.376L32 320.001V336.001L8.75 347.626C3.375 350.251 0 355.751 0 361.876V438.126C0 444.251 3.375 449.751 8.75 452.376L32 464.001C32 490.501 53.5 512.001 80 512.001H368C394.5 512.001 416 490.501 416 464.001L439.25 452.376C444.625 449.751 448 444.251 448 438.126V361.876C448 355.751 444.625 350.251 439.25 347.626L416 336.001V320.001L439.25 308.376C444.625 305.751 448 300.251 448 294.126V217.876C448 211.751 444.625 206.251 439.25 203.626L416 192.001V176.001L439.25 164.376ZM352 432.001C352 440.751 344.75 448.001 336 448.001H112C103.25 448.001 96 440.751 96 432.001V80.001C96 71.251 103.25 64.001 112 64.001H336C344.75 64.001 352 71.251 352 80.001V432.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 432.001C352 440.751 344.75 448.001 336 448.001H112C103.25 448.001 96 440.751 96 432.001V80.001C96 71.251 103.25 64.001 112 64.001H336C344.75 64.001 352 71.251 352 80.001V432.001Z" })
    ]
  }
));
TabletRuggedDuotone.displayName = "TabletRuggedDuotone";
var TabletRugged_default = TabletRuggedDuotone;
