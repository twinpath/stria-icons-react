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
var Upload_exports = {};
__export(Upload_exports, {
  default: () => Upload_default
});
module.exports = __toCommonJS(Upload_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UploadRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 296.969H320V344.969H448C456.822 344.969 464 352.146 464 360.969V440.969C464 449.791 456.822 456.969 448 456.969H64C55.178 456.969 48 449.791 48 440.969V360.969C48 352.146 55.178 344.969 64 344.969H192V296.969H64C28.654 296.969 0 325.623 0 360.969V440.969C0 476.314 28.654 504.969 64 504.969H448C483.348 504.969 512 476.314 512 440.969V360.969C512 325.623 483.348 296.969 448 296.969ZM136.969 169.937L232 74.906V344.969C232 358.219 242.75 368.969 256 368.969S280 358.219 280 344.969V74.906L375.031 169.938C379.719 174.625 385.844 176.969 392 176.969S404.281 174.625 408.969 169.937C418.344 160.562 418.344 145.375 408.969 136L272.969 0C263.594 -9.375 248.406 -9.375 239.031 0L103.031 136C93.656 145.375 93.656 160.562 103.031 169.937S127.594 179.312 136.969 169.937ZM432 400.969C432 387.713 421.254 376.969 408 376.969S384 387.713 384 400.969C384 414.223 394.746 424.969 408 424.969S432 414.223 432 400.969Z" })
  }
));
UploadRegular.displayName = "UploadRegular";
var Upload_default = UploadRegular;
