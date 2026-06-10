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
var FireExtinguisher_exports = {};
__export(FireExtinguisher_exports, {
  default: () => FireExtinguisher_default
});
module.exports = __toCommonJS(FireExtinguisher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireExtinguisherLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.375 5.562C499.012 1.938 493.557 0.012 487.934 0.012C486.529 0.012 485.115 0.133 483.703 0.375L307.703 32.375C296.297 34.469 288 44.406 288 56V64H192V16C192 7.164 184.838 0 176 0C167.164 0 160 7.164 160 16V64H112C50.25 64 0 114.25 0 176C0 184.844 7.156 192 16 192S32 184.844 32 176C32 131.875 67.875 96 112 96H160V129.613C105.791 137.438 64 183.625 64 240V464C64 490.508 85.49 512 112 512H240C266.51 512 288 490.508 288 464V240C288 183.625 246.209 137.438 192 129.613V96H288V104C288 115.594 296.297 125.531 307.703 127.625L483.703 159.625C485.141 159.875 486.578 160 488 160C493.578 160 499.031 158.062 503.375 154.438C508.844 149.875 512 143.125 512 136V24C512 16.875 508.844 10.125 503.375 5.562ZM256 464C256 472.824 248.822 480 240 480H112C103.178 480 96 472.824 96 464V448H256V464ZM256 240V416H96V240C96 195.887 131.889 160 176 160C220.113 160 256 195.887 256 240ZM480 126.426L320 97.336V62.664L480 33.57V126.426Z" })
  }
));
FireExtinguisherLight.displayName = "FireExtinguisherLight";
var FireExtinguisher_default = FireExtinguisherLight;
