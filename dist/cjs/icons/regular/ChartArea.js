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
var ChartArea_exports = {};
__export(ChartArea_exports, {
  default: () => ChartArea_default
});
module.exports = __toCommonJS(ChartArea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartAreaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 384H456C469.25 384 480 373.25 480 360V240C480 234.469 478.094 229.094 474.562 224.812L402.562 136.812C398.281 131.562 391.969 128.375 385.187 128.031C378.531 127.531 371.812 130.25 367.031 135.031L320.75 181.312L249.688 103.781C245.156 98.844 238.812 96.031 232.094 96H232C225.344 96 219 98.75 214.469 103.625L102.469 223.625C98.312 228.062 96 233.906 96 240V360C96 373.25 106.75 384 120 384ZM144 249.469L231.844 155.344L302.312 232.219C306.719 237.031 312.938 239.844 319.469 240C326.625 240.062 332.312 237.625 336.969 232.969L382.219 187.719L432 248.562V336H144V249.469ZM488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432Z" })
  }
));
ChartAreaRegular.displayName = "ChartAreaRegular";
var ChartArea_default = ChartAreaRegular;
