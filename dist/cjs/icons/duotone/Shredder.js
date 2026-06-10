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
var Shredder_exports = {};
__export(Shredder_exports, {
  default: () => Shredder_default
});
module.exports = __toCommonJS(Shredder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShredderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 416V488C424 501.255 434.745 512 448 512H448C461.255 512 472 501.255 472 488V416H424ZM40 488C40 501.255 50.745 512 64 512H64C77.255 512 88 501.255 88 488V416H40V488ZM232 488C232 501.255 242.745 512 256 512H256C269.255 512 280 501.255 280 488V416H232V488ZM136 488C136 501.255 146.745 512 160 512H160C173.255 512 184 501.255 184 488V416H136V488ZM328 488C328 501.255 338.745 512 352 512H352C365.255 512 376 501.255 376 488V416H328V488ZM448 192V77.25C448 68.766 444.625 60.625 438.625 54.625L393.375 9.375C387.375 3.375 379.219 0 370.75 0H96C78.344 0 64 14.328 64 32V192H128V64H357.49L384 90.51V192H448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 192H64C28.654 192 0 220.654 0 256V352C0 369.674 14.326 384 32 384H480C497.674 384 512 369.674 512 352V256C512 220.654 483.346 192 448 192ZM432 296C418.75 296 408 285.25 408 272C408 258.734 418.75 248 432 248S456 258.734 456 272C456 285.25 445.25 296 432 296Z" })
    ]
  }
));
ShredderDuotone.displayName = "ShredderDuotone";
var Shredder_default = ShredderDuotone;
