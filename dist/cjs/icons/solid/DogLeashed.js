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
var DogLeashed_exports = {};
__export(DogLeashed_exports, {
  default: () => DogLeashed_default
});
module.exports = __toCommonJS(DogLeashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DogLeashedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M67.625 3.341L288 168.091V191.966H239.5L38.125 41.216C31.25 35.841 29.999 25.716 35.375 18.716L45.25 6.091C50.625 -0.784 60.625 -2.034 67.625 3.341ZM128 224.034H288V384H192V496C192 504.875 184.875 512 176 512H112C103.125 512 96 504.875 96 496V282.125C58.875 268.875 32 233.625 32 192C32 174.375 46.375 160 64 160S96 174.375 96 192S110.375 224.034 128 224.034ZM544 111.966V143.966C544 179.341 515.375 207.966 480 207.966H448V243.591L320 197.841V47.966C320 33.716 337.25 26.591 347.375 36.716L374.625 63.966H428.25C439.125 63.966 452 71.841 456.875 81.716L464 95.966H528C536.875 95.966 544 103.091 544 111.966ZM320 231.841L448 277.466V495.966C448 504.841 440.875 511.966 432 511.966H368C359.125 511.966 352 504.841 352 495.966V383.966H320V231.841ZM432 111.966C432 103.091 424.875 95.966 416 95.966S400 103.091 400 111.966S407.125 127.966 416 127.966S432 120.841 432 111.966Z" })
  }
));
DogLeashedSolid.displayName = "DogLeashedSolid";
var DogLeashed_default = DogLeashedSolid;
