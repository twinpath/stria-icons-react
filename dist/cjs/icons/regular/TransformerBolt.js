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
var TransformerBolt_exports = {};
__export(TransformerBolt_exports, {
  default: () => TransformerBolt_default
});
module.exports = __toCommonJS(TransformerBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransformerBoltRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 128H160C168.836 128 176 120.836 176 112C176 103.162 168.836 96 160 96H64C55.164 96 48 103.162 48 112C48 120.836 55.164 128 64 128ZM224 64H320C328.836 64 336 56.836 336 48C336 39.162 328.836 32 320 32H296V24C296 10.742 285.254 0 272 0S248 10.742 248 24V32H224C215.164 32 208 39.162 208 48C208 56.836 215.164 64 224 64ZM224 128H320C328.836 128 336 120.836 336 112C336 103.162 328.836 96 320 96H224C215.164 96 208 103.162 208 112C208 120.836 215.164 128 224 128ZM384 192V176C384 167.162 376.836 160 368 160H16C7.164 160 0 167.162 0 176V192C0 200.836 7.164 208 16 208V464C7.164 464 0 471.162 0 480V496C0 504.836 7.164 512 16 512H368C376.836 512 384 504.836 384 496V480C384 471.162 376.836 464 368 464V208C376.836 208 384 200.836 384 192ZM320 464H64V208H320V464ZM64 64H160C168.836 64 176 56.836 176 48C176 39.162 168.836 32 160 32H136V24C136 10.742 125.254 0 112 0S88 10.742 88 24V32H64C55.164 32 48 39.162 48 48C48 56.836 55.164 64 64 64ZM131.998 348.004H173.793L144.959 415.277C142.756 420.422 144.42 426.41 148.943 429.703C151.053 431.238 153.537 432 155.998 432C158.834 432 161.646 431.004 163.896 429.035L259.9 345.039C263.676 341.746 264.988 336.461 263.23 331.785C261.471 327.098 256.994 324.004 252.002 324.004H210.207L239.041 256.732C241.244 251.588 239.58 245.6 235.057 242.307C230.486 238.99 224.299 239.283 220.104 242.975L124.1 326.969C120.324 330.262 119.012 335.547 120.77 340.223C122.529 344.91 127.006 348.004 131.998 348.004Z" })
  }
));
TransformerBoltRegular.displayName = "TransformerBoltRegular";
var TransformerBolt_default = TransformerBoltRegular;
