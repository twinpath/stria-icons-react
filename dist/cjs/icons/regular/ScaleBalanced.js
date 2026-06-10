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
var ScaleBalanced_exports = {};
__export(ScaleBalanced_exports, {
  default: () => ScaleBalanced_default
});
module.exports = __toCommonJS(ScaleBalanced_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScaleBalancedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.002 336C256.002 319.875 257.377 327.25 170.878 154.5C162.128 136.875 145.003 128 128.003 128S93.878 136.875 85.003 154.5C-1.996 328.75 0.004 320.375 0.004 336C0.004 380.125 57.253 416 128.003 416S256.002 380.125 256.002 336ZM127.753 176H128.003L200.252 320H55.878L127.753 176ZM519.999 464H344.001V155.875C371.376 147.25 392.626 124.625 398.376 96H520C533.254 96 543.999 85.255 543.999 72V72C543.999 58.745 533.254 48 520 48H393.251C380.876 19.75 352.751 0 320.001 0S259.127 19.75 246.752 48H120.003C106.748 48 96.003 58.745 96.003 72V72C96.003 85.255 106.748 96 120.003 96H241.627C247.377 124.625 268.627 147.25 296.001 155.875V464H120.003C106.748 464 96.003 474.745 96.003 488V488C96.003 501.255 106.748 512 120.003 512H520C533.254 512 543.999 501.255 543.999 488V488C543.999 474.745 533.254 464 519.999 464ZM320.001 112C302.376 112 288.002 97.625 288.002 80S302.376 48 320.001 48S352.001 62.375 352.001 80S337.626 112 320.001 112ZM639.999 336C639.999 319.875 641.374 327.25 554.874 154.5C546.124 136.875 529 128 512 128S477.875 136.875 469 154.5C382.001 328.75 384.001 320.375 384.001 336C384.001 380.125 441.25 416 512 416S639.999 380.125 639.999 336ZM439.875 320C439.875 320 493.25 213.5 511.75 176H512L584.249 320H439.875Z" })
  }
));
ScaleBalancedRegular.displayName = "ScaleBalancedRegular";
var ScaleBalanced_default = ScaleBalancedRegular;
