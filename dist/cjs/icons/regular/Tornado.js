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
const TornadoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M387.656 195.906C344.187 145.906 320.249 118.375 407.781 42.094C415.312 35.531 417.999 24.969 414.468 15.594C410.968 6.219 401.999 0 391.999 0L24.159 0.031C11.159 0.031 0.503 10.406 0.159 23.406C-4.622 206.063 99.095 261.375 182.439 305.844C256.876 345.563 315.687 376.938 303.595 485.344C302.47 495.469 307.845 505.188 317.031 509.625C320.343 511.219 323.906 512 327.437 512C333.656 512 339.781 509.594 344.374 505C414.062 435.531 447.968 375 447.999 320C448.031 265.344 415.968 228.469 387.656 195.906ZM62.011 127.938C54.152 105.623 49.179 79.51 48.189 48.031L334.781 48C310.128 78.328 300.771 104.615 300.552 127.938H62.011ZM192.001 256.52C151.943 234.939 114.005 212.443 87.116 175.938H313.195C323.279 194.896 337.829 211.762 351.437 227.406C359.728 236.953 367.781 246.34 374.958 255.938H192.001V256.52ZM273.032 303.938H398.3C399.308 309.107 400.003 314.398 399.999 319.969C399.968 350.844 383.874 385.969 350.999 426.531C342.683 367.754 311.111 331.371 273.032 303.938Z" })
  }
));
TornadoRegular.displayName = "TornadoRegular";
var Tornado_default = TornadoRegular;
