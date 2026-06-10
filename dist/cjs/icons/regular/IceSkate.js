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
var IceSkate_exports = {};
__export(IceSkate_exports, {
  default: () => IceSkate_default
});
module.exports = __toCommonJS(IceSkate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IceSkateRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 416H552C538.8 416 528 426.8 528 440V440C528 453.255 517.255 464 504 464H432V416H448C483.2 416 512 387.2 512 352V299C512 254.875 482 216.625 439.25 205.875L352 184V24C352 10.8 341.2 0 328 0H328C314.8 0 304 10.8 304 24V32H204.25C196.25 32 188.125 33.625 180.5 36.625L52.125 88C40 92.75 32 104.625 32 117.75V352C32 387.25 60.75 416 96 416V464H24C10.8 464 0 474.8 0 488V488C0 501.2 10.8 512 24 512H512C547.2 512 576 483.2 576 448V440C576 426.8 565.2 416 552 416ZM80 352V128.5L198.375 81.125C200.25 80.25 202.25 80 204.25 80H304V128H240C231.2 128 224 135.2 224 144V144C224 152.8 231.2 160 240 160H304V192H240C231.2 192 224 199.2 224 208V208C224 216.8 231.2 224 240 224H314.125L427.625 252.375C449 257.75 464 276.875 464 299V352C464 360.8 456.8 368 448 368H96C87.2 368 80 360.8 80 352ZM144 416H384V464H144V416Z" })
  }
));
IceSkateRegular.displayName = "IceSkateRegular";
var IceSkate_default = IceSkateRegular;
