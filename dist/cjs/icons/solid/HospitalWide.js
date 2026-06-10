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
var HospitalWide_exports = {};
__export(HospitalWide_exports, {
  default: () => HospitalWide_default
});
module.exports = __toCommonJS(HospitalWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalWideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 96H448V48C448 21.49 426.51 0 400 0H176C149.49 0 128 21.49 128 48V96H48C21.49 96 0 117.49 0 144V480C0 497.673 14.327 512 32 512H544C561.673 512 576 497.673 576 480V144C576 117.49 554.51 96 528 96ZM128 432C128 440.836 120.836 448 112 448H80C71.164 448 64 440.836 64 432V400C64 391.162 71.164 384 80 384H112C120.836 384 128 391.162 128 400V432ZM128 336C128 344.836 120.836 352 112 352H80C71.164 352 64 344.836 64 336V304C64 295.162 71.164 288 80 288H112C120.836 288 128 295.162 128 304V336ZM256 432C256 440.836 248.836 448 240 448H208C199.164 448 192 440.836 192 432V400C192 391.162 199.164 384 208 384H240C248.836 384 256 391.162 256 400V432ZM256 336C256 344.836 248.836 352 240 352H208C199.164 352 192 344.836 192 336V304C192 295.162 199.164 288 208 288H240C248.836 288 256 295.162 256 304V336ZM309.602 224H266.398C260.656 224 256 219.344 256 213.602V176H218.398C212.656 176 208 171.344 208 165.602V122.398C208 116.656 212.656 112 218.398 112H256V74.398C256 68.656 260.656 64 266.398 64H309.602C315.344 64 320 68.656 320 74.398V112H357.602C363.344 112 368 116.656 368 122.398V165.602C368 171.344 363.344 176 357.602 176H320V213.602C320 219.344 315.344 224 309.602 224ZM384 432C384 440.836 376.836 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.162 327.164 384 336 384H368C376.836 384 384 391.162 384 400V432ZM384 336C384 344.836 376.836 352 368 352H336C327.164 352 320 344.836 320 336V304C320 295.162 327.164 288 336 288H368C376.836 288 384 295.162 384 304V336ZM512 432C512 440.836 504.836 448 496 448H464C455.164 448 448 440.836 448 432V400C448 391.162 455.164 384 464 384H496C504.836 384 512 391.162 512 400V432ZM512 336C512 344.836 504.836 352 496 352H464C455.164 352 448 344.836 448 336V304C448 295.162 455.164 288 464 288H496C504.836 288 512 295.162 512 304V336Z" })
  }
));
HospitalWideSolid.displayName = "HospitalWideSolid";
var HospitalWide_default = HospitalWideSolid;
