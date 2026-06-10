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
var RulerTriangle_exports = {};
__export(RulerTriangle_exports, {
  default: () => RulerTriangle_default
});
module.exports = __toCommonJS(RulerTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerTriangleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.846 430.059L81.941 14.154C72.164 4.377 60.141 0 48.348 0C23.67 0 0 19.16 0 48.096V464C0 490.51 21.49 512 48 512H463.904C506.668 512 528.084 460.297 497.846 430.059ZM493.469 476.246C488.344 488.615 477.293 496 463.904 496H48C30.355 496 16 481.645 16 464V48.096C16 28.006 32.447 16 48.348 16C54.191 16 62.803 17.643 70.629 25.469L112.924 67.764L82.344 98.344C79.219 101.469 79.219 106.531 82.344 109.656C83.906 111.219 85.953 112 88 112S92.094 111.219 93.656 109.656L124.236 79.076L192.924 147.764L162.344 178.344C159.219 181.469 159.219 186.531 162.344 189.656C163.906 191.219 165.953 192 168 192S172.094 191.219 173.656 189.656L204.236 159.076L272.924 227.764L242.344 258.344C239.219 261.469 239.219 266.531 242.344 269.656C243.906 271.219 245.953 272 248 272S252.094 271.219 253.656 269.656L284.236 239.076L352.924 307.764L322.344 338.344C319.219 341.469 319.219 346.531 322.344 349.656C323.906 351.219 325.953 352 328 352S332.094 351.219 333.656 349.656L364.236 319.076L432.924 387.764L402.344 418.344C399.219 421.469 399.219 426.531 402.344 429.656C403.906 431.219 405.953 432 408 432S412.094 431.219 413.656 429.656L444.236 399.076L486.531 441.371C495.998 450.838 498.592 463.875 493.469 476.246ZM133.656 250.344C131.359 248.062 127.938 247.375 124.938 248.594C121.953 249.844 120 252.75 120 256V384C120 388.406 123.578 392 128 392H256C259.234 392 262.156 390.062 263.391 387.062S263.937 380.625 261.656 378.344L133.656 250.344ZM136 376V275.312L236.688 376H136Z" })
  }
));
RulerTriangleThin.displayName = "RulerTriangleThin";
var RulerTriangle_default = RulerTriangleThin;
