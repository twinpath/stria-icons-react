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
var MeterFire_exports = {};
__export(MeterFire_exports, {
  default: () => MeterFire_default
});
module.exports = __toCommonJS(MeterFire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MeterFireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 128C239.164 128 232 135.162 232 144V208C232 216.836 239.164 224 248 224H264C272.836 224 280 216.836 280 208V144C280 135.162 272.836 128 264 128H248ZM328 128C319.164 128 312 135.162 312 144V208C312 216.836 319.164 224 328 224H344C352.836 224 360 216.836 360 208V144C360 135.162 352.836 128 344 128H328ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64C346.496 64 422.377 127.01 442.561 211.41C449.092 204.498 455.707 197.889 462.318 191.76L481.359 174.107C447.85 81.947 359.742 16 256 16C123.451 16 16 123.451 16 256S123.451 496 256 496C299.465 496 340.115 484.273 375.277 464.068C367.121 450.191 360.855 435.119 357 418.98C327.615 437.258 293.078 448 256 448ZM168 128C159.164 128 152 135.162 152 144V208C152 216.836 159.164 224 168 224H184C192.836 224 200 216.836 200 208V144C200 135.162 192.836 128 184 128H168ZM568.9 248.699C557.4 259.398 546.699 270.799 536.799 282.998C520 259.998 500.9 238.699 480 219.398C423.799 271.498 383.998 339.398 383.998 380.299C383.998 453.1 441.299 512 512 512C582.699 512 640 453.1 640 380.299C640 349.898 610.301 287.1 568.9 248.699ZM560 446.299C546.5 455.799 530.299 460.799 513.699 460.799C470.398 460.799 435.199 432.199 435.199 385.699C435.199 362.498 449.799 342.1 478.898 307.199C483 311.998 538.199 382.398 538.199 382.398L573.4 342.299C575.9 346.398 578.1 350.398 580.1 354.299C596.5 385.6 589.6 425.6 560 446.299Z" })
  }
));
MeterFireRegular.displayName = "MeterFireRegular";
var MeterFire_default = MeterFireRegular;
