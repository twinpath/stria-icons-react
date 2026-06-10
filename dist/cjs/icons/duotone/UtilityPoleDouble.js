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
const UtilityPoleDoubleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 32C10.746 32 0 42.744 0 56V64H48V56C48 42.744 37.254 32 24 32ZM128 56C128 42.744 117.254 32 104 32S80 42.744 80 56V64H128V56ZM83.156 128L224 221.896V183.438L140.844 128H83.156ZM488 32C474.746 32 464 42.744 464 56V64H512V56C512 42.744 501.254 32 488 32ZM408 32C394.746 32 384 42.744 384 56V64H432V56C432 42.744 421.254 32 408 32ZM371.156 128L288 183.438V221.896L428.844 128H371.156ZM24 224C10.746 224 0 234.744 0 248V256H48V248C48 234.744 37.254 224 24 224ZM83.156 320L224 413.896V375.437L140.844 320H83.156ZM488 224C474.746 224 464 234.744 464 248V256H512V248C512 234.744 501.254 224 488 224ZM408 224C394.746 224 384 234.744 384 248V256H432V248C432 234.744 421.254 224 408 224ZM288 375.438V413.896L428.844 320H371.156L288 375.438ZM128 248C128 234.744 117.254 224 104 224S80 234.744 80 248V256H128V248Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 128V256H512V288C512 305.672 497.674 320 480 320H288V512H224V320H32C14.328 320 0 305.672 0 288V256H224V128H32C14.326 128 0 113.672 0 96V64H224V16C224 7.162 231.164 0 240 0H272C280.836 0 288 7.162 288 16V64H512V96C512 113.672 497.674 128 480 128H288Z" })
    ]
  }
));
UtilityPoleDoubleDuotone.displayName = "UtilityPoleDoubleDuotone";
var UtilityPoleDouble_default = UtilityPoleDoubleDuotone;
