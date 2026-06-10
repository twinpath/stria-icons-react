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
var Sausage_exports = {};
__export(Sausage_exports, {
  default: () => Sausage_default
});
module.exports = __toCommonJS(Sausage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SausageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.875 69.875L463 24.125C464.875 18.625 464 12.375 460.5 7.625C457 2.875 451.5 0 445.625 0H386.375C380.5 0 375 2.875 371.5 7.625C368 12.375 367.125 18.625 369 24.125L384.25 69.875C346.875 83 320 118.25 320 160C320 248.25 248.25 320 160 320C118.25 320 83 346.875 69.875 384.125L24.125 369C18.625 367.125 12.375 368 7.625 371.5C2.875 375 0 380.5 0 386.375V445.625C0 451.5 2.875 457 7.625 460.5C12.375 463.875 18.625 464.875 24.125 463L69.875 447.75C83 485.125 118.25 512 160 512C354.125 512 512 354.125 512 160C512 118.25 485.125 83 447.875 69.875ZM160 464C133.5 464 112 442.5 112 416S133.5 368 160 368C274.75 368 368 274.75 368 160C368 133.5 389.5 112 416 112S464 133.5 464 160C464 327.625 327.625 464 160 464Z" })
  }
));
SausageRegular.displayName = "SausageRegular";
var Sausage_default = SausageRegular;
