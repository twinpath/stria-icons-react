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
var Tornado_exports = {};
__export(Tornado_exports, {
  default: () => Tornado_default
});
module.exports = __toCommonJS(Tornado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TornadoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M387.408 199.594C363.408 172.156 342.69 148.438 344.627 120.438C346.44 94.375 367.565 64.188 409.19 28.094C414.25 23.719 416.031 16.656 413.719 10.406C411.375 4.156 405.408 0 398.721 0L16.168 0.031C7.481 0.031 0.418 6.938 0.168 15.594C-4.676 199.156 96.104 252.625 185.008 299.781C186.941 300.809 188.811 301.812 190.725 302.83V303.937H192.805C269.44 344.752 328.508 380.027 315.691 494.219C314.941 500.969 318.535 507.437 324.629 510.406C326.848 511.469 329.223 512 331.598 512C335.723 512 339.815 510.406 342.877 507.344C413.563 437.188 447.969 376.656 448 322.219C448.031 268.969 415.813 232.125 387.408 199.594ZM32.043 32.031L358.627 32C329.379 62.906 314.598 90.812 312.723 118.219C312.49 121.557 312.754 124.727 312.899 127.937H47.732C38.127 101.617 32.414 70.238 32.043 32.031ZM200.006 271.531C147.961 243.908 94.916 215.605 62.717 159.938H320.217C329.721 182.131 346.67 201.617 363.315 220.656C377.506 236.9 391.807 253.516 401.981 271.938H200.762C200.51 271.805 200.258 271.664 200.006 271.531ZM256.822 303.938H414.02C415.19 309.828 416.004 315.859 416 322.219C415.969 360.25 394.065 403.656 349.19 454.25C345.818 376.967 305.795 335.469 256.822 303.938Z" })
  }
));
TornadoLight.displayName = "TornadoLight";
var Tornado_default = TornadoLight;
