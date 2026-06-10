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
var HeadphonesSimple_exports = {};
__export(HeadphonesSimple_exports, {
  default: () => HeadphonesSimple_default
});
module.exports = __toCommonJS(HeadphonesSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 271.875H144C108.656 271.875 80 300.578 80 336V415.875C80 451.297 108.656 480 144 480H160C177.656 480 192 465.641 192 447.938V303.938C192 286.219 177.656 271.875 160 271.875ZM144 432C135.178 432 128 424.766 128 415.875V336C128 327.107 135.178 319.875 144 319.875V432ZM256 32C112.906 32 4.562 151.125 0 288V400C0 408.844 7.156 416 16 416H32C40.844 416 48 408.844 48 400V288C48 173.328 141.344 80.203 256 80.188C370.656 80.203 464 173.328 464 288V400C464 408.844 471.156 416 480 416H496C504.844 416 512 408.844 512 400V288C507.438 151.125 399.094 32 256 32ZM368 271.875H352C334.344 271.875 320 286.219 320 303.938V447.938C320 465.641 334.344 480 352 480H368C403.344 480 432 451.297 432 415.875V336C432 300.578 403.344 271.875 368 271.875ZM384 415.875C384 424.766 376.822 432 368 432V319.875C376.822 319.875 384 327.107 384 336V415.875Z" })
  }
));
HeadphonesSimpleRegular.displayName = "HeadphonesSimpleRegular";
var HeadphonesSimple_default = HeadphonesSimpleRegular;
