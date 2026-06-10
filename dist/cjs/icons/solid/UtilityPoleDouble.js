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
var UtilityPoleDouble_exports = {};
__export(UtilityPoleDouble_exports, {
  default: () => UtilityPoleDouble_default
});
module.exports = __toCommonJS(UtilityPoleDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UtilityPoleDoubleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 32L488 32C474.745 32 464 42.745 464 56V64H432V56C432 42.745 421.255 32 408 32H408C394.745 32 384 42.745 384 56V64H288V16C288 7.163 280.837 0 272 0H240C231.163 0 224 7.163 224 16V64H128V56C128 42.745 117.255 32 104 32H104C90.745 32 80 42.745 80 56V64H48V56C48 42.745 37.255 32 24 32H24C10.745 32 0 42.745 0 56V96C0 113.673 14.327 128 32 128H83.156L224 221.896V256H128V248C128 234.745 117.255 224 104 224H104C90.745 224 80 234.745 80 248V256H48V248C48 234.745 37.255 224 24 224H24C10.745 224 0 234.745 0 248V288C0 305.673 14.327 320 32 320H83.156L224 413.896V512H288V413.896L428.844 320H480C497.673 320 512 305.673 512 288V248C512 234.745 501.255 224 488 224L488 224C474.745 224 464 234.745 464 248V256H432V248C432 234.745 421.255 224 408 224H408C394.745 224 384 234.745 384 248V256H288V221.896L428.844 128H480C497.673 128 512 113.673 512 96V56C512 42.745 501.255 32 488 32ZM140.844 320H224V375.438L140.844 320ZM371.156 320L288 375.438V320H371.156ZM140.844 128H224V183.438L140.844 128ZM288 128H371.156L288 183.438V128Z" })
  }
));
UtilityPoleDoubleSolid.displayName = "UtilityPoleDoubleSolid";
var UtilityPoleDouble_default = UtilityPoleDoubleSolid;
