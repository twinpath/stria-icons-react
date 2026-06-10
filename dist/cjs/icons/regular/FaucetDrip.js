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
var FaucetDrip_exports = {};
__export(FaucetDrip_exports, {
  default: () => FaucetDrip_default
});
module.exports = __toCommonJS(FaucetDrip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetDripRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 480C416 497.625 430.375 512 448 512S480 497.625 480 480S448 416 448 416S416 462.375 416 480ZM368 160H323.125C304.5 136.875 278.375 120.25 248 114.375V83.625C248 83.625 366.625 96 368 96C376.75 96 384 88.5 384 79.125V48.875C384 39.5 376.75 32 368 32C366.625 32 374.125 31.25 248 45.375V16C248 7.163 240.837 0 232 0H216C207.163 0 200 7.163 200 16V45.375C73.875 31.25 81.375 32 80 32C71.25 32 64 39.5 64 48.875V79.125C64 88.5 71.25 96 80 96C81.375 96 200 83.625 200 83.625V114.375C169.625 120.25 143.5 136.875 124.875 160H24C10.745 160 0 170.745 0 184V184C0 197.255 10.745 208 24 208H150.75C163.5 178.875 192.25 160 224 160S284.5 178.875 297.25 208H368C421.019 208 464 250.981 464 304V336H400V304C400 286.4 385.6 272 368 272H297.25C284.5 301.125 255.75 320 224 320S163.5 301.125 150.75 272H24C10.745 272 0 282.745 0 296V296C0 309.255 10.745 320 24 320H124.875C148.25 349 183.75 368 224 368S299.75 349 323.125 320H352V336C352 362.51 373.49 384 400 384H464C490.51 384 512 362.51 512 336V304C512 224.471 447.529 160 368 160Z" })
  }
));
FaucetDripRegular.displayName = "FaucetDripRegular";
var FaucetDrip_default = FaucetDripRegular;
