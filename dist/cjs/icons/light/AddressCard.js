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
var AddressCard_exports = {};
__export(AddressCard_exports, {
  default: () => AddressCard_default
});
module.exports = __toCommonJS(AddressCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AddressCardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 288H352C343.164 288 336 295.164 336 304S343.164 320 352 320H480C488.836 320 496 312.836 496 304S488.836 288 480 288ZM192 256C227.346 256 256 227.346 256 192S227.346 128 192 128S128 156.654 128 192S156.654 256 192 256ZM192 160C209.645 160 224 174.355 224 192S209.645 224 192 224S160 209.645 160 192S174.355 160 192 160ZM224 288H160C115.816 288 80 323.816 80 368C80 376.836 87.164 384 96 384S112 376.836 112 368C112 341.49 133.49 320 160 320H224C250.51 320 272 341.49 272 368C272 376.836 279.164 384 288 384S304 376.836 304 368C304 323.816 268.184 288 224 288ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V416ZM480 224H352C343.164 224 336 231.164 336 240S343.164 256 352 256H480C488.836 256 496 248.836 496 240S488.836 224 480 224ZM480 160H352C343.164 160 336 167.164 336 176S343.164 192 352 192H480C488.836 192 496 184.836 496 176S488.836 160 480 160Z" })
  }
));
AddressCardLight.displayName = "AddressCardLight";
var AddressCard_default = AddressCardLight;
