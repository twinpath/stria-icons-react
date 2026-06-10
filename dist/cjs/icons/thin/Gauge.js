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
var Gauge_exports = {};
__export(Gauge_exports, {
  default: () => Gauge_default
});
module.exports = __toCommonJS(Gauge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 336C87.164 336 80 343.162 80 352C80 360.836 87.164 368 96 368S112 360.836 112 352C112 343.162 104.836 336 96 336ZM288 144C296.836 144 304 136.836 304 128C304 119.162 296.836 112 288 112S272 119.162 272 128C272 136.836 279.164 144 288 144ZM144 176C135.164 176 128 183.162 128 192C128 200.836 135.164 208 144 208S160 200.836 160 192C160 183.162 152.836 176 144 176ZM480 336C471.164 336 464 343.162 464 352C464 360.836 471.164 368 480 368S496 360.836 496 352C496 343.162 488.836 336 480 336ZM433.531 171.281L320.234 326.307C310.229 322.344 299.402 320 288 320C239.469 320 200 359.469 200 408C200 412.422 203.594 416 208 416S216 412.422 216 408C216 368.297 248.312 336 288 336S360 368.297 360 408C360 412.422 363.594 416 368 416S376 412.422 376 408C376 376.654 359.412 349.281 334.674 333.689L446.469 180.719C449.062 177.156 448.281 172.141 444.719 169.547C441.156 166.969 436.156 167.703 433.531 171.281ZM288 32C129.188 32 0 161.203 0 320C0 375.094 16.25 429.156 46.938 476.359C48.438 478.625 50.938 480 53.656 480H522.344C525.062 480 527.562 478.625 529.062 476.359C559.75 429.156 576 375.094 576 320C576 161.203 446.812 32 288 32ZM517.969 464H58.031C30.531 420.281 16 370.578 16 320C16 170.016 138.031 48 288 48S560 170.016 560 320C560 370.578 545.469 420.281 517.969 464Z" })
  }
));
GaugeThin.displayName = "GaugeThin";
var Gauge_default = GaugeThin;
